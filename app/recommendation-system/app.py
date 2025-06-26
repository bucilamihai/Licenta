import os
import logging
from flask import Flask, request, jsonify

app = Flask(__name__)

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def jaccard_similarity(set1, set2):
    if not set1 or not set2:
        return 0.0
    intersection = len(set1.intersection(set2))
    union = len(set1.union(set2))
    return intersection / union

@app.route('/recommend', methods=['POST'])
def recommend():
    data = request.get_json()
    targetUser = data.get('targetUser')
    otherUsers = data.get('otherUsers')

    if not targetUser or not otherUsers:
        return jsonify({'error': 'Invalid input'}), 400
    
    targetHobbyNames = {
        hobby["name"].lower()
        for hobby in targetUser.get("hobbies", [])
    }

    recommendations = []
    for user in otherUsers:
        userHobbyNames = {
            hobby["name"].lower()
            for hobby in user.get("hobbies", [])
        }
        similarity_score = jaccard_similarity(targetHobbyNames, userHobbyNames)
        recommendations.append({
            "userId": user.get("userId"),
            "score": similarity_score
        })

    recommendations.sort(key=lambda x: x["score"], reverse=True)
    # recommendations = [rec for rec in recommendations if rec["score"] > 0.25]
    return jsonify(recommendations), 200


@app.route('/')
def home():
    logger.info("Home route accessed")
    return "Welcome to the Recommendation System!", 200

@app.route('/health')
def health():
    logger.info("Health check accessed")
    return jsonify({"status": "healthy", "service": "recommendation"}), 200

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    print(f"Starting Flask app on port {port}")
    app.run(host="0.0.0.0", port=port, debug=False)
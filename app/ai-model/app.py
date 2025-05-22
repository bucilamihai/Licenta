from flask import Flask, request, jsonify

app = Flask(__name__)

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
        score = len(targetHobbyNames.intersection(userHobbyNames))
        max_len = max(len(targetHobbyNames), 1)
        similarity_score = score / max_len # Normalize score to [0, 1]
        recommendations.append({
            "userId": user.get("userId"),
            "score": similarity_score
        })

    recommendations.sort(key=lambda x: x["score"], reverse=True)
    return jsonify(recommendations), 200

if __name__ == '__main__':
    app.run(host="127.0.0.1", port=5000)
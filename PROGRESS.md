# Week 1
- **21.01.2025**
    - created Github repository and project
    - added resources to repository and ideas to the backlog
- **23.01.2025**
    - *Thesis*: added specialization and author's name
    - *App*: defined tech stack, started development by creating a backend project in **Java Spring Boot** and a frontend project in **Ionic React**
- **25.01.2025**
    - found several datasets on the internet
    - merged them into one large dataset
- **26.01.2025**
    - sorted the dataset by hobby's name
    - normalized names and types (capitalize first letter of first word)
    - merged types in case of duplicate (lexicographic) hobbies
        ```yaml
        # e.g. Yoga
        # Before:
        "name": "Yoga",
        "types": [
        	"Health"
        ]
        
        "name": "Yoga",
        "types": [
        	"Physical"
        ]

        "name": "Yoga",
        "types": [
        	"Relaxation",
        	"Fitness",
        	"Flexibility"
        ]

        # After
        "name": "Yoga",
        "types": [
          "Fitness",
          "Flexibility",
          "Health",
          "Relaxation",
          "Physical"
        ]
        ```
    - obtained 735 unique* hobbies after processing the dataset
    - *the dataset could be processed even further, since there are still duplicate hobbies (e.g. dance - dancing, volunteer - volunteering, video games - video gaming, jump roping - jumping rope)
    

# Week 2    

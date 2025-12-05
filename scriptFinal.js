// Workout data
const workouts = {
    muscle_gain: {
        beginner:[
            "Bodyweight squats",
            "Knee push-ups",
            "Light Romanian deadlift",
            "Band Rows",
            "Hip thrust (No weights)",
            "Shoulder press with bottles",
            "Basic Plank"
        ],
        intermediate:[
            "Bulgarian split squats",
            "Standard push-ups",
            "Romanian deadlift(moderate weight)",
            "Dumbbell row",
            "Weighted hip thrust",
            "Dumbbell shoulder press",
            "Side plank"
        ],
        advanced:["Heavy weighted squats",
            "Weighted/decline push-ups",
            "Heavy Romanian deadlift",
            "Pull-ups",
            "Heavy hip thrust",
            "Barbell military press", 
            "Dragon flag"
        ]
    },
    weight_loss: {
        beginner:[
            "Fast walking",
            "High-rep squats",
            "Step-ups", 
            "Low-impact jumps",
            "Low-impact jacks", 
            "20-30s plank"
        ],
        intermediate:[
            "Light jogging",
            "Modified burpees",
            "Jump rope",
            "Fast mountain climbers",
            "Jump squats",
            "HIIT 20s ON/10s OFF"
        ],
        advanced:[
            "Sprint intervals", 
            "Full burpees", 
            "Box jumps",
            "Fast jump rope",
            "Explosive mountain climbers",
            "HIIT 40s ON/ 20s OFF"
        ]
    },
    definition:{
        beginner:["Slow-tempo squats",
            "Reverse lunges", 
            "Knee push-ups",
            "Band rows",
            "30s planks",
            "Incline walking"
        ],
        intermediate:["Moderate-weight squats",
            "Walking lunges (light weight)",
            "Standard push-ups",
            "Moderateweight rows",
            "Mountain climbers",
            "45-60s planks"
        ],
        advanced:[
            "Pause squats",
            "Weighted lateral lunges",
            "Plyometric push-ups", 
            "Heavy rows",
            "HIIT 30s ON/ 30s OFF",
            "Advanced planks"
        ]
    }
};
// Generate a workouut based on goal + level
function generatePlan(goal, level) {
    if (!workouts[goal]) {
        return "Invalid goal";
    }
    if (!workouts[goal][level]) {
        return "Invalid level";
    }
    return workouts[goal][level];
}

//Called by the HTML buttons
function generateWorkout(goal) {

    //Ask user for their level
    let level = prompt("Enter your level: beginner, intermediate, or advanced").toLowerCase();

    const exercises = generatePlan(goal, level);

    //Handle errors
    if (typeof exercises === "string") {
        document.getElementById("result-text").innerHTML = exercises;
        return;
    }

    //Build the list of exercises
    let html = "<ul>";
    for (let i = 0; i < exercises.length; i++) {
        html += '<li>${exercises[i]}</li>';
    }
    html += "</ul>";

    //Display the result
    document.getElementById("result-text").innerHTML = html;
}

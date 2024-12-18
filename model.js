class WorkoutModel {
    constructor() {
        this.workouts = [];
    }

    addWorkout(workout) {
        this.workouts.push(workout);
    }

    removeWorkout(index) {
        this.workouts.splice(index, 1);
    }

    getFilteredWorkouts(sport, date) {
        return this.workouts.filter(workout => {
            return (!sport || workout.sportType.includes(sport)) &&
                   (!date || workout.date === date);
        });
    }

    getTotalCount() {
        return this.workouts.length;
    }
}

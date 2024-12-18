class WorkoutPresenter {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.bindAddWorkout(this.handleAddWorkout.bind(this));
        this.view.bindRemoveWorkout(this.handleRemoveWorkout.bind(this));
        this.view.bindFilters(this.handleFilter.bind(this));

        this.render();
    }

    handleAddWorkout(workout) {
        if (!workout.sportType || !workout.duration || !workout.intensity || !workout.date) {
            alert('Все поля должны быть заполнены!');
            return;
        }
        this.model.addWorkout(workout);
        this.render();
    }

    handleRemoveWorkout(index) {
        this.model.removeWorkout(index);
        this.render();
    }

    handleFilter() {
        const sport = this.view.filterSportInput.value;
        const date = this.view.filterDateInput.value;
        const filteredWorkouts = this.model.getFilteredWorkouts(sport, date);
        this.view.displayWorkouts(filteredWorkouts, filteredWorkouts.length);
    }

    render() {
        const workouts = this.model.workouts;
        this.view.displayWorkouts(workouts, this.model.getTotalCount());
    }
}

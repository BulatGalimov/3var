document.addEventListener('DOMContentLoaded', () => {
    const model = new WorkoutModel();
    const view = new WorkoutView();
    new WorkoutPresenter(model, view);
});

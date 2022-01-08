const sunmoonchange = () => {
    const today = new Date();
    const hour = today.getHours()
    console.log(hour);
    if (hour <= 18 && hour >= 7 ) {
        document.querySelector('.sunmoon').textContent = '🌞';
    }
    else {
        document.querySelector('.sunmoon').textContent = '🌝';
    }
}
sunmoonchange();
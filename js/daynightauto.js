
const sunmoonchange = () => {
    const today = new Date();
    const hour = today.getHours()
    console.log('현재시각은 ' + hour + '시 입니다.');
    console.log('07:00~19:00까지는 해모양' + '\n' + '19:00~07:00까지는 달모양입니다.');
    if (hour <= 18 && hour >= 7 ) {
        document.querySelector('.sunmoon').textContent = '🌞';
    }
    else {
        document.querySelector('.sunmoon').textContent = '🌝';
    }
}
sunmoonchange();
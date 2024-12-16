function createLights() {
    const lights = document.querySelector('.lights');
    const colors = ['#ff0000', '#00ff00', '#ffff00', '#ff00ff', '#00ffff', '#ff8800'];

    // 更多的灯光位置
    const positions = [
        { left: '45%', top: '15%' },
        { left: '35%', top: '25%' },
        { left: '55%', top: '30%' },
        { left: '25%', top: '35%' },
        { left: '65%', top: '40%' },
        { left: '35%', top: '45%' },
        { left: '55%', top: '50%' },
        { left: '25%', top: '55%' },
        { left: '75%', top: '60%' },
        { left: '35%', top: '65%' },
        { left: '65%', top: '70%' },
        { left: '45%', top: '75%' },
        { left: '55%', top: '80%' },
        { left: '35%', top: '85%' },
        { left: '65%', top: '90%' }
    ];

    positions.forEach(pos => {
        const light = document.createElement('div');
        light.style.position = 'absolute';
        light.style.width = '6px';
        light.style.height = '6px';
        light.style.borderRadius = '50%';

        const color = colors[Math.floor(Math.random() * colors.length)];
        light.style.backgroundColor = color;
        light.style.boxShadow = `0 0 10px ${color}, 0 0 20px ${color}`;

        light.style.left = pos.left;
        light.style.top = pos.top;

        light.style.animation = `lightTwinkle ${1 + Math.random()}s infinite alternate`;

        lights.appendChild(light);
    });
}

function createSnow() {
    const snow = document.querySelector('.snow');
    const snowflakesCount = 50;

    for (let i = 0; i < snowflakesCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';

        // 随机大小
        const size = Math.random() * 3 + 2;
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;

        // 随机位置
        snowflake.style.left = `${Math.random() * 100}%`;

        // 随机动画时间和延迟
        const fallDuration = Math.random() * 3 + 3;
        const fallDelay = Math.random() * 5;
        const swayDuration = fallDuration * 0.8;

        snowflake.style.opacity = Math.random() * 0.6 + 0.4;
        snowflake.style.filter = 'blur(1px)';

        // 设置动画
        snowflake.style.animation = `
            fall ${fallDuration}s linear ${fallDelay}s infinite,
            sway ${swayDuration}s ease-in-out ${fallDelay}s infinite alternate
        `;

        snow.appendChild(snowflake);
    }
}

// 添加动画
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        0% { transform: translateY(0) rotate(0deg); }
        100% { transform: translateY(600px) rotate(360deg); }
    }
    
    @keyframes sway {
        0% { transform: translateX(-15px); }
        100% { transform: translateX(15px); }
    }

    @keyframes lightTwinkle {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.4; }
    }
`;
document.head.appendChild(style);

window.onload = () => {
    createLights();
    createSnow();
};
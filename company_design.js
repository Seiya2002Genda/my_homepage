const style = document.createElement('style');
style.innerHTML = `
    body {
        font-family: Arial, sans-serif;
        text-align: center;
        background: url('Company_background.jpeg') no-repeat center center fixed;
        background-size: cover;
        color: #fff;
        margin: 0;
        padding: 0;
        transition: background-color 0.3s ease, color 0.3s ease;
    }

    header {
        background: rgba(0, 0, 0, 0.7);
        padding: 20px;
        border-radius: 10px;
    }

    section {
        padding: 20px;
        margin: 20px auto;
        width: 80%;
        background: rgba(0, 0, 0, 0.8); /* 👈 透明度を少し上げて見やすく */
        color: white;
        border-radius: 10px;
        box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.2);
    }

    a {
        color: #4db8ff; /* 👈 見やすいブルーに変更 */
        text-decoration: none;
        font-weight: bold;
    }

    a:hover {
        color: #00ccff; /* 👈 ホバー時の色を明るく */
        text-decoration: underline;
    }

    .contact-icons {
        display: flex;
        justify-content: center;
        gap: 15px;
        align-items: center;
    }

    .contact-icons a {
        display: flex;
        align-items: center;
        gap: 5px;
    }
`;
document.head.appendChild(style);
const Clock = () => {

    const currentDate = new Date();
    const date = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()} `;
    const time = `${currentDate.getHours()}:${currentDate.getMinutes()}`;

    return (
        <div>
            <p>{date} | {time}</p>
        </div>
    );
};

export default Clock;
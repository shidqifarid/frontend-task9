import { useEffect,useState } from "react";

function Counter() {
    const [angka, setAngka] = useState(0);

    function addAngka() {
        setAngka(angka + 1);
    }

    function updateDOM() {
        console.log("Lifecycle: Dimount");

        document.title = "Hasil: ${angka}";
    }

    useEffect(updateDOM, [angka]);

    console.log("Lifecycle: Dimount");

    return (
        <div>
        <p>Result: {angka}</p>
        <button onClick={addAngka}>Add</button>
        </div>
    );
}

export default Counter;

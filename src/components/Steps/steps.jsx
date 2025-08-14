export default function StepList({ steps }) {

    return (

        <ol className="steps-list">
            {steps.map((step, index) => (
                <li key={index}>{step}</li>
            ))}
        </ol>

    )
}
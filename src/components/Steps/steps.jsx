export default function StepList({ steps }) {

    return (
        // Composant qui affiche la liste des étapes de la recette
        <ol className="steps-list">
            {steps.map((step, index) => (
                <li key={index}>{step}</li>
            ))}
        </ol>

    )
}
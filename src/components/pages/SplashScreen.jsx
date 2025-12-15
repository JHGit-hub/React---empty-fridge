import CTAButton from "../buttons/CTA";

export default function SplashScreen() {

    return (
        // page d'accueil de l'application
        <div className="page">
            <div className="splash-page">
                <div className="title">
                    <h1>Empty Fridge</h1>
                    <img src='src/assets/images/fridge.png' alt="logo de l'application Empty Fridge" />
                    <p>The app that helps you eat better by using your leftovers and saving as much as possible!</p>
                </div>
                <div className="link-list">
                    <CTAButton label={'What’s in your fridge?'} to={'/home'} />
                </div>
            </div>
        </div>

    );
}

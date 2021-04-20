import Image from '../assets/images/wish-cover.jpg';


const styles = {
    paperContainer: {
        display: 'flex',
        backgroundImage: `url(${Image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        height: '100vh',
        justifyContent: 'space-between',
        userSelect: 'none',
    }
};

const BannerComponent = ({ children }) => {

    return (
        <div style={styles.paperContainer}>
            <div className="banner-container">
                <div className="wish-banner">
                    <strong>Wish-Kart</strong>
                    <div className="sub-section">
                        Making your <strong>Wish</strong> come true!
                </div>
                </div>
            </div>
            <div className="side-panel">
                {children}
            </div>
        </div>
    );
}

export default BannerComponent;
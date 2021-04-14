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

const BannerComponent = (props) => {

    return (
        <div style={styles.paperContainer}>
            <div className="wish-banner">
                <strong>Wish-Kart</strong>
                <div className="sub-section">
                    Making your <strong>Wish</strong> come true!
                </div>
            </div>
            {props.children}
        </div>
    );
}

export default BannerComponent;
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
    }
};

const BannerComponent = (props) => {

    return (
        <div style={styles.paperContainer}>
            <div className="wish-banner">
                Wish-Kart
                <div className="sub-section">
                    Making your Wish come true!
                </div>
            </div>
            {props.children}
        </div>
    );
}

export default BannerComponent;
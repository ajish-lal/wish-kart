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
                    For the best online shopping experience!
                </div>
            </div>
            {props.children}
        </div>
    );
}

export default BannerComponent;
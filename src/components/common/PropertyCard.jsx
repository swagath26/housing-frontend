import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './PropertyCard.css'
import { INRFormat } from '../../utils/CurrencyFormat';

const PropertyCard = ({ property }) => {
  
    return (
        <div className='card property-card' style={{width:'350px'}}>
          <div className='card-top-section'>
              <div className="row m-0 p-0 pt-1" style={{position:'absolute', zIndex:'1', width:'100%'}}>
                <div className='col-10 px-1'>
                  <div className='rounded-3 px-2' style={{backgroundColor:'rgba(0,0,0,0.7)', paddingBottom:'3px', color:'#f0f0f0', fontSize:'13px', display:'inline-block'}}>
                    {property.home_type}
                  </div>
                </div>
                <div className='col-2' >
                  <i className='favourites-icon' id={`fav_${property.id}`} style={{display:'inline-block'}}>
                    <img src="/static/img/fav-logo.png" alt='fav-icon'/>
                  </i>
                </div>
              </div>
              <div id={`property_${property.id}`} className="carousel slide" style={{zIndex:'0'}}>
                <div className="carousel-inner">
                  {property.images && 
                  property.images.map((image, index) => (
                  <div className={index===0 ? 'carousel-item active' : 'carousel-item'} key={index}>
                    <img className='w-100 object-fit-cover card-img' style={{height:'160px', overflow:'hidden'}} 
                    src={image.image}
                    alt={`Property ${index+1}`} />
                  </div>
                  ))}
                </div>
                <div>
                  <button className="carousel-controls carousel-control-prev" type="button" data-bs-target={`#property_${property.id}`} data-bs-slide="prev">
                    <FontAwesomeIcon icon={faAngleLeft} style={{fontSize:'30px'}} />
                  </button>
    
                  <button className="carousel-controls carousel-control-next" type="button" data-bs-target={`#property_${property.id}`} data-bs-slide="next">
                    <FontAwesomeIcon icon={faAngleRight} style={{fontSize:'30px'}} />
                  </button>
                </div>
              </div>
            </div>

          <div className="card-body p-2" style={{height:'130px'}}>
            <h5 className='card-title fw-bold'>{INRFormat(property.price)}</h5>
            <div className='card-text'>
              <p style={{fontSize:'16px', margin:'0', textOverflow:'ellipsis', overflow:'hidden', textWrap:'nowrap'}}>
                <b>{property.bedrooms} </b>bds | <b>{property.bathrooms}</b> ba <b>{property.balcony && ' | Balcony'}</b> | <b>{property.area || '--'}</b> sqft
              </p>
              <p style={{fontSize:'16px', margin:'0', textOverflow:'ellipsis', overflow:'hidden', textWrap:'nowrap'}}>
                {property.address}, {property.location}
              </p>
              <p style={{fontSize:'13px'}}>
                Listing by: {property.user_first_name} {property.user_last_name}
              </p>
            </div>
          </div>
        </div>
    );
};

export default PropertyCard;
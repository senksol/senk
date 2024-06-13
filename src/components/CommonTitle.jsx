
export default function CommonTitle({ title, des, className='' }) {
    return (
      <div className={`common-title ${className}`}>
        <h2 data-aos="fade-up">{title}</h2>
        {des ? (<p>{des}</p>) : ''}
      </div>
    )
  }
  
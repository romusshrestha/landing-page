import Image from 'next/image';

const DoctorCard = ({ doctor }) => {
  const { name, title, image, description } = doctor;
  
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden hover:scale-105 transition duration-200">
      <div className="p-0">
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          alt={name}
          className="w-full rounded-t-lg object-cover h-64"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-primary font-medium">{title}</p>
      </div>
    </div>
  );
};

export default DoctorCard;
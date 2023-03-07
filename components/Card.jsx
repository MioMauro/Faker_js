import Image from "next/image"

export const Card = ({fullName, job, avatar}) => {
  return (
    <div className="mx-auto w-80 rounded-lg bg-gray-200 shadow-md">
      
      <div className="md:w-1/3">
<Image className="rounded-full p-2"
  src={avatar}
  alt="avatar"
  width={100}
  height={100}
  priority
/>
      </div>

      <div className="md:w-2/3">
        <h2 className="p-2">{fullName}</h2>
        <p className="p-2">{job}</p>
      </div>

    </div>
  )
}

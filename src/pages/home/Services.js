import airimg from '../../assets/service_logo/Bumrungrad  Hospital-air_ambulance.png'
import airpickup from '../../assets/service_logo/Bumrungrad  Hospital-air_pickup.png'
import airticket from '../../assets/service_logo/Bumrungrad  Hospital-air_ticket.png'
import appointment from '../../assets/service_logo/Bumrungrad  Hospital-appointment.png'
import hotelReservation from '../../assets/service_logo/Bumrungrad  Hospital_visa_processing.png'
import orderMedicine from '../../assets/service_logo/Bumrungrad  Hospital_order_medicine.png'
import teleMedicine from '../../assets/service_logo/Bumrungrad  Hospital_telemedicine.png'
import medicalRecords from '../../assets/service_logo/Bumrungrad  Hospital_medical_records.png'
import { Link } from 'react-router-dom'
import { Divider } from '@mui/material'
import AirAmbulanceForm from './modalFrom/AirAmbulanceForm'

import AirtTcket from './modalFrom/AirtTcket'
import AirPickup from './modalFrom/AirPickup'

const services = [
  {
    name: 'Book Appointment',
    img: appointment,
    pageTo: '/appointment',
  },
  {
    name: 'Visa Processing',
    img: hotelReservation,
    pageTo: '/visaprocessing',
  },
  {
    id: 3,
    name: 'Order Medicine',
    img: orderMedicine,
    pageTo: '/orderMedicine',
  },
  {
    name: 'Medical Records',
    img: medicalRecords,
    pageTo: '/medicalRecord',
  },
  {
    name: 'Tele Medicine',
    img: teleMedicine,
    pageTo: '/telemedicine',
  },
  {
    id: 2,
    name: 'Air Ambulance',
    img: airimg,
    form: <AirAmbulanceForm />,
    height: 'md:w-[750px]',
  },
  {
    id: 7,
    name: 'Air Ticket',
    img: airticket,
    form: <AirtTcket />,
    height: 'h-[470px] overflow-auto md:w-[750px]',
  },
  {
    id: 8,
    name: 'Airport Pickup',
    img: airpickup,
    form: <AirPickup />,
    height: 'md:w-[750px]',
  },
]

export default function Services(props) {
  const handleOpen = props.handaleOpen
  const getData = props.getData

  return (
    <div className='p-5 md:p-10 my-3 md:my-10 md:container md:mx-auto'>
      <h2 className='capitalize text-xl md:text-2xl lg:text-3xl font-bold text-blue'>
        Our Services
      </h2>
      <div className='my-5'>
        <Divider />
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
        {services.map((s, i, id) => (
          <div key={i}>
            {' '}
            <Link
              to={s.pageTo}
              onClick={() => {
                handleOpen(id)
                getData(s)
              }}
              key={i}
              className='cursor-pointer flex flex-col lg:flex-row gap-4 items-center shadow-class hover:translate-y-5 duration-300 ease-linear p-4 rounded-xl'
            >
              <img
                src={s.img}
                alt='Bumrungrad Hospital'
                className='h-[100px] w-[100px]'
              />
              <h5 className='text-center font-semibold text-blue'>{s.name}</h5>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

import React, { useState } from 'react'
import { TextField, FormControl, MenuItem, Select } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function CheckUp() {
  const navigate = useNavigate()
  const [loader, setLoader] = useState(false)

  const [stepper1, setStepper1] = useState(true)
  const [stepper2, setStepper2] = useState(false)

  //data of Field...
  const [healtePackage, SetHealtePackage] = useState('')
  const [prefferdDoctor, SetprefferdDoctor] = useState('')
  const [appoinMentDate, SetAppoinMentDate] = useState('')
  const [appoinMentTime, SetAppoinMentTime] = useState('')
  const [medicalConcern, SetMedicalConcern] = useState('')
  const [HnNumber, SetHnNumber] = useState('')
  const [patientName, SetPatientName] = useState('')
  const [gender, setGender] = useState('')
  const [dob, setDOB] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [nationality, setNationality] = useState('')

  const handleClick = () => {
    setStepper1(false)
    setStepper2(true)
  }
  const handleClickprevious = () => {
    setStepper1(true)
    setStepper2(false)
  }
  const handaleDataSubmit = () => {
    setLoader(true)
    const cheakAppointment = {
      healtePackage,
      prefferdDoctor,
      appoinMentDate,
      appoinMentTime,
      medicalConcern,
      HnNumber,
      patientName,
      gender,
      dob,
      email,
      phone,
      nationality,
    }
    console.log(cheakAppointment)
    const formData = new FormData()
    formData.append('healtePackage', healtePackage)
    formData.append('prefferdDoctor', prefferdDoctor)
    formData.append('appoinMentDate', appoinMentDate)
    formData.append('appoinMentTime', appoinMentTime)
    formData.append('medicalConcern', medicalConcern)
    formData.append('HnNumber', HnNumber)
    formData.append('patientName', patientName)
    formData.append('gender', gender)
    formData.append('email', email)
    formData.append('phone', phone)
    formData.append('nationality', nationality)

    fetch('https://api.bumrungraddiscover.com/api/add/health/check_up', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          console.log(data)
          setLoader(false)
          window.alert('Check Up Request Placed')
          navigate('/')
        }
        setLoader(false)
      })
      .catch((error) => console.error(error))
  }
  return (
    <div className='px-5 py-3  md:container md:mx-auto'>
      <h1 className='text-center capitalize text-xl md:text-2xl lg:text-3xl font-bold text-blue mt-8'>
        Health Check-up Appointment
      </h1>
      <div className='mx-auto my-10  lg:w-1/2'>
        <div className='flex justify-center mx-10 items-center'>
          <button
            className={`px-4 py-2 shadow rounded-full border border-blue font-semibold text-xl ${
              stepper1 ? 'bg-blue text-white' : 'bg-cream'
            }`}
          >
            1
          </button>
          <div
            className={`h-1 rounded mx-5 w-full ${
              stepper2 ? 'bg-blue' : 'bg-cream'
            }`}
          ></div>
          <button
            className={`px-4 py-2 shadow rounded-full border border-blue font-semibold text-xl ${
              stepper2 ? 'bg-blue text-white' : 'bg-cream'
            }`}
          >
            2
          </button>
        </div>
        {stepper1 && (
          <div className='mt-10'>
            <div>
              <p className='mb-2.5 font-semibold'>Preferred Health Packages*</p>
              <TextField
                type='text'
                placeholder='Enter Package Name'
                defaultValue={healtePackage}
                fullWidth
                onChange={(e) => SetHealtePackage(e.target.value)}
              />
            </div>
            <div className='mt-2.5 font-semibold'>
              <p className='mb-2.5'>Preferred Doctor*</p>
              <TextField
                type='text'
                placeholder='Enter Doctor Name'
                fullWidth
                defaultValue={prefferdDoctor}
                onChange={(e) => SetprefferdDoctor(e.target.value)}
              />
            </div>
            <div className='mt-2.5 font-semibold'>
              <p className='mb-2.5'>Preferred Appointment Date*</p>
              <TextField
                type='date'
                defaultValue={appoinMentDate}
                required
                fullWidth
                onChange={(e) => SetAppoinMentDate(e.target.value)}
              />
            </div>
            <div className='mt-2.5 font-semibold'>
              <p className='mb-2.5'>Preferred Appointment Time*</p>
              <TextField
                type='time'
                defaultValue={appoinMentTime}
                required
                fullWidth
                onChange={(e) => SetAppoinMentTime(e.target.value)}
              />
            </div>
            <div className='mt-2.5 font-semibold'>
              <p className='mb-2.5'>State Your Medical Concern or Request*</p>
              <TextField
                type='text'
                placeholder='Enter Request'
                fullWidth
                defaultValue={medicalConcern}
                onChange={(e) => SetMedicalConcern(e.target.value)}
              />
            </div>
            <div className='mt-2.5 font-semibold'>
              <p className='mb-2.5'>Hospital Number (if available)*</p>
              <TextField
                type='text'
                placeholder='Enter HN Number'
                fullWidth
                defaultValue={HnNumber}
                onChange={(e) => SetHnNumber(e.target.value)}
              />
            </div>
            <div>
              <div className='flex justify-center'>
                <button
                  className={`mt-5 px-4 py-2 rounded font-semibold bg-blue border border-blue ${
                    appoinMentDate === '' || appoinMentTime === ''
                      ? 'bg-cream text-blue'
                      : 'bg-blue text-white '
                  }`}
                  disabled={appoinMentDate === '' || appoinMentTime === ''}
                  onClick={handleClick}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
        {stepper2 && (
          <div className='mt-10'>
            <div>
              <p className='mb-2.5 font-semibold'>Patient Name*</p>
              <TextField
                type='text'
                placeholder='Enter Name'
                required
                fullWidth
                defaultValue={patientName}
                onChange={(e) => SetPatientName(e.target.value)}
              />
            </div>
            <div className='mt-2.5 font-semibold'>
              <FormControl fullWidth>
                <p className='mb-2.5'>Gender*</p>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={gender}
                  required
                  defaultValue={gender}
                  placeholder='Select Gender'
                  onChange={(e) => setGender(e.target.value)}
                >
                  <MenuItem value='Male'>Male</MenuItem>
                  <MenuItem value='Female'>Female</MenuItem>
                  <MenuItem value='Other'>Other</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className='mt-2.5 font-semibold'>
              <p className='mb-2.5'>Date Of Birth*</p>
              <TextField
                type='date'
                required
                fullWidth
                defaultValue={dob}
                onChange={(e) => setDOB(e.target.value)}
              />
            </div>
            <div className='mt-2.5 font-semibold'>
              <p className='mb-2.5'>Email*</p>
              <TextField
                type='email'
                placeholder='Enter Email'
                required
                fullWidth
                defaultValue={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='mt-2.5 font-semibold'>
              <p className='mb-2.5'>Phone*</p>
              <TextField
                type='number'
                placeholder='Enter Phone Number'
                required
                fullWidth
                defaultValue={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className='mt-2.5 font-semibold'>
              <p className='mb-2.5'>National Origin*</p>
              <TextField
                type='text'
                placeholder='Enter Nationality'
                required
                fullWidth
                defaultValue={nationality}
                onChange={(e) => setNationality(e.target.value)}
              />
            </div>
            <div>
              <div className='flex justify-center'>
                <button
                  className={`mt-5 px-4 py-2 rounded font-semibold bg-blue border border-blue ${
                    stepper2 ? 'bg-blue text-white ' : 'bg-cream text-blue'
                  } `}
                  onClick={handleClickprevious}
                >
                  Previous
                </button>

                <button
                  onClick={handaleDataSubmit}
                  className={`mt-5 px-4 py-2 ml-10 bg-blue border border-blue text-white rounded  hover:bg-white hover:text-blue font-semibold duration-300 ease-linear ${
                    medicalConcern === '' ||
                    HnNumber === '' ||
                    patientName === '' ||
                    gender === '' ||
                    email === '' ||
                    phone === '' ||
                    nationality === ''
                      ? 'bg-cream text-blue'
                      : 'bg-blue text-white '
                  }`}
                  disabled={
                    medicalConcern === '' ||
                    HnNumber === '' ||
                    patientName === '' ||
                    gender === '' ||
                    email === '' ||
                    phone === '' ||
                    nationality === ''
                  }
                >
                  {loader ? 'Loading...' : 'Submit'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

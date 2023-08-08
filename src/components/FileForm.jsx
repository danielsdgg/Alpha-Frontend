import React from 'react'
import { useFormik } from 'formik'

function FileForm({uploadProfile}) {
    const {handleChange, handleSubmit, values, setFieldValue} = useFormik({
        initialValues:{
            file:""
        },
        onSubmit:(file) => {
            uploadProfile(file)
        }
    })
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="file" name="file" onChange={e => setFieldValue('file', e.target.files[0])}  />
        </form>
    </div>
  )
}

export default FileForm
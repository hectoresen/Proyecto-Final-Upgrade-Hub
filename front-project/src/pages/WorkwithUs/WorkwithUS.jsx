import React from 'react'
import { FormattedMessage  as T} from 'react-intl';
import './WorkwithUs.scss';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';



const WorkwithUS = () => {


  return (
    <div>
        <div className='intro'>
            <h1>
                <T id='workwithUS.intro' />
            </h1>

        </div>
        <h2 class ><T id='workwithUS.offer'/></h2>
        <div className='offers'> 


             <div className='offers__img' >
                <a href="www.tecnoempleo.com">
                <img src="https://directivosygerentes.es/wp-content/uploads/2020/03/Ecommerce.jpg" alt="junior Developer" />
                <p>Junior Full Stack Developer</p>
                </a>
            </div>
            <div className='offers__img' >
                <a href="www.tecnoempleo.com">
                <img src="https://esnova.com/wp-content/uploads/2021/03/almacen-transito-esnova.jpg" alt="storage" />
                <p><T id='workwithUS.job' /></p>
                </a>
            </div>
            <div className='img' >
                <a href="www.tecnoempleo.com">
                <img src="https://www.aytosanlorenzo.es/wp-content/uploads/2017/10/repartidor.jpg" alt="rider" />
                <p><T id='workwithUS.job1' /></p>
                </a>
            </div>

        </div>
        
        <h2><T id='workwithUS.form.SendUs'/> </h2>
        <div className='access__forms-register-input'>
                    <span className="p-float-label p-input-icon-right">
                        <i className="pi pi-user" />
                            <InputText id="name" name="text" type="text"  ></InputText>
                        <label htmlFor="name"><T id='workwithUS.form.name' /></label>
                    </span>
        </div>
        <div className='access__forms-register-input'>
                    <span className="p-float-label p-input-icon-right">
                        <i className="pi pi-user" />
                            <InputText id="LName" name="LastName" type="tel" ></InputText>
                        <label htmlFor="email"><T id='workwithUS.form.Lastname' /></label>
                    </span>
        </div>
        <div className='access__forms-register-input'>
                    <span className="p-float-label p-input-icon-right">
                        <i className="pi pi-envelope" />
                            <InputText id="email" name="email" type="email" ></InputText>
                        <label htmlFor="email">Email*</label>
                    </span>
        </div>
        <div className='access__forms-register-input'>
                    <span className="p-float-label p-input-icon-right">
                        <i className="pi pi-phone" />
                            <InputText id="phone" name="phone" type="number" ></InputText>
                        <label htmlFor="phone"> <T id='workwithUS.form.phone'/> </label>
                    </span>
        </div>
        <div className='access__forms-register-input'>
                    <span className="p-float-label p-input-icon-right">
                        <i className="pi pi-upload" />
                            <InputText id="cv" name="cv" type="file"  ></InputText>
                        <label className='input' htmlFor="cv"> <T id='workwithUS.form.cv'/> </label>
                    </span>
        </div>
        <Button type="submit" label="Buena Suerte!" className="mt-2" />
    </div>
  )
}

export default WorkwithUS
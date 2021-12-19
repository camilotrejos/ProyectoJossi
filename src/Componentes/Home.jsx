import React from 'react'
import { Escribenosencuentranos } from './Escribenosencuentranos'
import { Presentacionhome } from './Presentacionhome'
import { Registrohome } from './Registrohome'
import {Servicioshome} from './Servicioshome'

export const Home = () => {

    return (
        
              <>
                    <div className="col-sm-12">
                      <Presentacionhome />
                    </div>
                    <div className="col-sm-12">
                      <Servicioshome />
                    </div>
                    <div className="col-sm-12">
                      <Registrohome />
                    </div>
                    <div className="col-sm-12">
                      <Escribenosencuentranos />
                    </div>
            
              </>
    
    )
}

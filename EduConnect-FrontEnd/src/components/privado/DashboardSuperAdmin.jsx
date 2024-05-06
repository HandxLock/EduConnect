import * as echarts from 'echarts'
import { useEffect, useState } from 'react'
import { getAdmins } from '../../services/adminService'
import { getAlumnos } from '../../services/alumnoService'
import { getDocentes } from '../../services/docenteService'
import { getApoderados } from '../../services/apoderadoService'

function DashboardSuperAdmin () {
  const [admins, setAdmins] = useState([])
  const [alumnos, setAlumnos] = useState([])
  const [docentes, setDocentes] = useState([])
  const [apoderados, setApoderados] = useState([])

  useEffect(() => {
    async function fetchData () {
      const docentesData = await getDocentes()
      const alumnosData = await getAlumnos()
      const adminsData = await getAdmins()
      const apoderadosData = await getApoderados()

      setDocentes(docentesData)
      setAlumnos(alumnosData)
      setAdmins(adminsData)
      setApoderados(apoderadosData)
    }

    fetchData()
  }, [])

  useEffect(() => {
    const cantidadAdmins = admins.length
    const cantidadAlumnos = alumnos.length
    const cantidadDocentes = docentes.length
    const cantidadApoderados = apoderados.length
    const sumaTotal = (cantidadAdmins + cantidadAlumnos + cantidadDocentes + cantidadApoderados).toString()

    const chartDom = document.getElementById('dashboard')
    const myChart = echarts.init(chartDom)
    const option = {
      title: {
        text: 'Usuarios Usando La Plataforma',
        subtext: sumaTotal,
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          type: 'pie',
          radius: '50%',
          data: [
            { value: cantidadAdmins, name: 'Administradores' },
            { value: cantidadDocentes, name: 'Docentes' },
            { value: cantidadAlumnos, name: 'Estudiantes' },
            { value: cantidadApoderados, name: 'Apoderados' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }

    option && myChart.setOption(option)

    // Clean up when component unmounts
    return () => myChart.dispose()
  }, [admins, alumnos, apoderados, docentes])

  return <div id='dashboard' className='dashboard' style={{ width: '50%', height: '400px', margin: '20px auto', marginTop: '3rem' }} />
}

export default DashboardSuperAdmin

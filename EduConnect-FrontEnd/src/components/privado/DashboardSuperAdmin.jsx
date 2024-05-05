import * as echarts from 'echarts'
import { useEffect } from 'react'
import { getAdmins } from '../../services/adminService'
import { getAlumnos } from '../../services/alumnoService'
import { getDocentes } from '../../services/docenteService'
import { getApoderados } from '../../services/apoderadoService'
const docentes = await getDocentes()
const alumnos = await getAlumnos()
const admins = await getAdmins()
const apoderados = await getApoderados()
function DashboardSuperAdmin () {
  const cantidadAdmins = admins.length
  const cantidadAlumnos = alumnos.length
  const cantidadDocentes = docentes.length
  const cantidadApoderados = apoderados.length
  const sumaTotal = (cantidadAdmins + cantidadAlumnos + cantidadDocentes + cantidadApoderados).toString()
  useEffect(() => {
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
  }, [cantidadAdmins, cantidadAlumnos, cantidadApoderados, cantidadDocentes, sumaTotal])

  return <div id='dashboard' className='dashboard' style={{ width: '50%', height: '400px', margin: '20px auto', marginTop: '3rem' }} />
}

export default DashboardSuperAdmin

import { FC } from 'react'
import styles from './Home.module.css'

const CompanyTendency: FC = () => {
  return (
    <div
      style={{ backgroundImage: "url('companyTendencyBg.png')" }}
      className={styles.companyTendency}
    ></div>
  )
}

export default CompanyTendency

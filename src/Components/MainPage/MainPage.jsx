
import KpiBox from "./KPIs/KpiBox";
import KpiBox2 from "./KPIs/KpiBox2";
import KpiBox3 from "./KPIs/KpiBox3";
import ContractTable from "./DataTable/Table";
import ExtraComponent from "./DataInBetween/ExtraComponent";
import './MainPage.css'

const MainPage = ()=>{
    return(
        <>
        <div className='main-page' style={{backgroundColor:"#EFF7F7"}}>
          <div className='kpis'>
          <KpiBox/>
          <KpiBox2/>
          <KpiBox/>
          <KpiBox3/>
          </div>
          <hr style={{borderColor: "#E5EDF8 !important"}}/>
          <ExtraComponent/>
          <ContractTable/>
        </div></>
    );
}
export default MainPage;
import style from './data_info.module.css'
const Data_info=(props)=>{
    let {videodata}=props
    return <div className={style.container}>
        {/* <h1>data information</h1>
        <h2>{videodata.title}</h2>
        <h2>{videodata.id}</h2> */}
        <img className={style.img} src={videodata.thumbnail_Url} ></img>
            <h1 className={style.likesviews}>likes={videodata.likes}</h1>
            <h1 className={style.likesviews}>views={videodata.views}</h1>
        <h1 className={style.channelName}>{videodata.channelName}</h1>
        <img className={style.logo} src={videodata.channelLogoUrl}></img>
        </div>
}
        
        
        
export default Data_info;
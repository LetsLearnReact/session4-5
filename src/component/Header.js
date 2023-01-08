const Title = () =>(
    <a href = "/">
        <img  className = "logo"
    src = "https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj" 
    alt ="This is logo"
    />

    </a>
    
)

export const HeaderComponent = () =>{
    return (
      
        <div className='header'>
           <Title/>
           
           <div className='nav-items'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>

           </div>
        
        </div>
    )
}
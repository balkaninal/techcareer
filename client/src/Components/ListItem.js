import React from 'react'
import { setMenuPage,setPostId } from '../Redux/Actions/onPageActions'
import { useDispatch } from 'react-redux'

const ListItem = (props) => {
const dispatch = useDispatch()

  const clickHandler = ()=>{
    dispatch(setPostId(props.id))
    dispatch(setMenuPage('post'))


  }
    return (
        <div onClick={clickHandler}className="overflow-hidden  w-full md:h-40 h-52  rounded-xl border-2 border-gray-400 border-opacity-50 shadow-md bg-gray-100 p-8 flex flex-row items-center justify-between relative mb-2">
          <div id={props.id+"-img"} className="   md:mr-4 md:w-12 md:h-12 h-24 w-24 flex flex-col items-center justify-center" >
              { props.type =='2' && <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABv0lEQVRoge2Yv07CUBTGv9s2bprIiGExOhrQMLrYkLr5DjyDCy9hfAPcdWNSE5oOOsvgQsRJYVKIoIuhHAep6S2h5c9ty433t53LzTnfd84paQooFP8bJiJJqVTaI6IqEe0D0EOuuoyxB9d1y47jPIqorYlIMhZfRLh4ANCJqKhpWlVEXQAwRCQZdx62bUdO1DRNAnAgoi4gaAKI7vyy96ciykBqSG9gYmfbWSs3NPRzgCwQ1tMQNQHDgIjqI5dVtjvXTf4nH+2slRvqWgNAJlGBs9Mz3FF+q3P74h1wK/Tb+ZUVDwCbQ1078x8EngGyklSzIMf+gDewKjsfzoY/kP5fSBlIm7nehcq731x88bQmRMQyeaWfgPQGuBV6/vqMuM6PNvr+rCyeV/oJSG+Ae5mzM4eUlpB5MLt3f7qln4AykDaxGii0aii0anGWUBNIHekNCPky5zFt34PnjZ0TYTXVBPwEO+t1XmTHg0g/AWUgbYQ+A0Hi3H2P4AQGsVdcng9/wBkgQj1ZLQtx4w84A0ynCoBeonLmgr0zGKf+E86A+Xbf1KHlGXAFoJ+otnD6AC4Z9MJR13lNW4xCoRDIDzj/ctLQAScWAAAAAElFTkSuQmCC"/>}
              { props.type =='1' &&  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAD80lEQVRoge2ZX2xTVRzHP+e2pX+UytpKmE5FItbAG5uQZR1jY8aQQCbE+OQfEmJcfDCLGnkxBh9M9EXRBGNMfPHBV6MmGMGyqVWMrsaI6AQkJCObwa0bnVu7tff+fJC47O4PPefevvX71J7+vr/v9/R77um9p9BAAw3UDdlk5mA2mTlYTw1Vr8YnE7viEULngYBygtu6p4em66Fj1aMpQESFXgdagGYJVF+rl05dEsgmO3cqkbMsfkGOKNW+d/KbH/zW8j2BY2ApkXdcvS0l8u6xOuj53nB3InMY2LXCR62dicxTfuv5uoRuXLgjQPMqJdeUE0z7eUH7mkCUda+yunmAjWJVXvFT07cEvkx0brOQn4HQTUqrAbF2dE19fc4PXd8SsJA3ubl5gKCt7OP+6fqAM8mOQ8DDtTNUzw2OZ3heQoPsCUqi+iuQ1uEJXLytUNreRr7iRd9zAk6T/TSa5gEUbL3eFDniVd9TAt+1tEfLc4EL/HfLYILx2UjpvgNj+TlTD54SKJesAczNAzTHStHnvHgwTiCX6li/4KgrQMKLAaCwzpLNmYlvZ0zIxgks2FY/3s0DJOYdnjElGyVwkn3hSGLmMnCHqbALf6l48N7uK0NlXaJRAuHEP0/in3mATRTtx02I2hMQUAp5wURs7b7yohisCO0JDKUyXRjs+zUgPbihc7cuST8Bhyd0OTXDEu3eWpENbt4TkWJ1HNigK1QjirORUrPOD5teAsVKH/UzDxC/tRw5oEPQmoCgNO44zSCoh3Tqg5r9lz3rJnfeT3pgPwB/vPUZkz9e1Gy5DO06xboX8d3ugfTAfsKpOOFUnPSAVvo1a6wF3QmIeyB4S/j/1+Hb4wRjYXeJLhydYt0JjLsHyteuL3nftGOLZstlGNMp1p3AqHugkL+85P2WI72E4jHNtotQK2isBa0JKOG0e2z88zziLK6s2J1JHnyvn41d242Wk4Oc0vKkUzyYbH9AJPC7e3zrs/toeWSlwziYnyhq7U6ORbp3InehVk9aCXRPnh1BGHKPX3r/FIWf/lyRo7k7ZXXMg8G9kGM5L+HajaRq88vLH3H14+8RW2sTWdIGi6O6pIAu4cPS6Njh2D2bgLYlHzhCYfgSf+d+w6nYBGNhAuEQlelZRo5/SmmssGZfJepETyH3ga4foyeyYVpDM03RL0TRbcJfAbmJwtTexzi/oEs0eiJrI1+Zt+1HUXxlwl8CYWihaveZmAeP50LDtIaKyejbCP0GvUSJOrF+au55L6dzvpxOD6Y62sThDVA9NVKyWBztmcjlvWr7+gfHmVRHGtvqU0p6Be5i8dDrqoJREXXaCcgnultlAw00sDr+BQl8LQiWlzhhAAAAAElFTkSuQmCC"/>}
              
              {props.type =='3' &&  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAErElEQVRogeWaT2hcVRTGf+dNJklrU9PXFAwumoVVceEf1C46MzWZBFxIFUqNWPFPuyguStUq2CJiQLBIpZuCFGy10k2hoIguFJJJzCQTWnVTrQVBsFIb02ZeY4Mkzczc42JmaiaZl7zXN4+O+K0e9557v/O9c+65794Z+D8hZcd3puz4pZSdeE1BbrU/1bCkU8NtifZ8gSOIPjmvuV8iDc93XRn6M2TffMFVyIAdf1rgCGBX6b4M8kLSSX8Tnmv+sEiISxSqQYHDq52ZNx7hh1w47nmHtbChYPRTDyKg+BL2XLNXDA60blpfe9f8YZGQGadlC8KLwM8e54iJZZ1N2fFdt7IQuBL3gbXZjm0DeQe4z8tkKnwVFdm1eTI9XjMPPWLZN9gHVmJt/DlRDgB3epgyK8rurqvpkzXwzzM8p8Lgus5VmPxbquwFGj1MfGouanY/PpG5HMhDj/Cd06m22D1irBOKPurB3FFkX9JJH5VilQsNN7U4v+fh6LU1zX2IvAlEPAzJGDGv9mQz390MnxcEqjKp1sRjWPoZ1TfNhVDgpBqzv3sqc6HcOGDHz4pwN6rjinyhubl3e6bPZP36sqj8+kFyKv0t6GbgogdzAZ4Vy/px0I49M6/xJ5QmkA6BVyTaODa8KrHOry+BhAAkndFzakwc+MXjkBZFTgysTWwEUMzx+Z0CG/JR87ZfPwILAeieylxQKSSBSx6HRDG6H8Ba3TgMFCp6hS1+faiJEIDu7NgfCFuBvBd7sYgBdP02NMuiFyDNfvlrJgQgmR05LcIHnoy1Yi+aqOxixC93TYUAREXfA64uZydwtvyscPu8niwFs88vb82FxCdHpwU5tpydgcPlZ4EVwO/ARxHkoe6/Mr/65Q3la7W/LdZlGUktYXIo6Yy8XkvOmkcEwJmcGgVZtKkpnAfZVmsREOL5oRSVg0BBYUxEvhzOpgf7wITBd0sOQoOtmx7Einyo6P3AsUmnfW8vpwrLDlwCDTXybVkMdnQ2M52Pq9KrsAO0zL2nzR6/gMOhIPOHFpHUmsQTaunLothAO7Ae9zU5bRpyG3oun55w6V8W4UVE9Kgod3i0bonkoi8B798sXShVC0DRr33ZC9uD8IUmJOmM7hSRHcCkxyF3BeELTYiAdmXTx01u7l6Bzz0MuRaELzQhZfRMn8l2OSNbgY+XslPR/iA8oQspQ6RwcInunKp1IMj8oe4jKTvWC/KJCE9dyV4dbrPXKNVL/vkeJ+31ZrMqwo2I8gCwUpGNvZybA3FcLJuCUoUrRKzrACilE5+6VTDfJ8KFCDsiM3DjvAHgds1T30LUMjPFh6KjIv9RIZZaswAqugLAqFYXInUuBC1FRIqpJW6LXWkM+ttKyKlFRWohi0+NJchQR2egyhVuRAyz8O9iF2Pc73SngqVXqEJMZGFELHch0ToWgtHSYi9GxIjrhgi5OhYSMaWIlFOrsERqRa7XrxBtkLKQ4j5iNbgLKfi/752PcIXki6lFKSJNK6+7C7HqWEi+iYp9ZNPFsRm4kW4LPKljIbcVpLJqFVE9KqaOF3vz5GxFapXg8plSxxEp/dlmVGBsXnO1m3YtqPk7CNc/7e2Ay6sb4KEAAAAASUVORK5CYII="/>}
              
                <span className='text-xl text-rose-700 mt-2 font-bold'>B+</span>
              </div>
          <div id={props.id+"-text-area"} className="flex flex-col  w-full lg:pl-4 pl-8 h-full items-start justify-center ">
              <div className="flex flex-row justify-between w-full">
              <div id={props.id+"-title"} className='  md:text-3xl text-2xl capitalize font-bold '>{props.title}</div>
              

              </div>
            
            
            <div id={props.id+"-desc"} className='mt-2 lg:text-lg  hidden md:block'>{props.desc}</div>
          </div>
          <div className="flex flex-col items-center justify-center">
              <div className="text-md font-bold">{props.city}</div>
          <div className='cursor-pointer md:w-36 md:h-12 w-auto px-6 h-12  rounded-full bg-gray-600 flex justify-center items-center'><i className='fas fa-info fa-lg text-white mr-4'></i><span className="text-gray-100 font-bold ">Detay</span></div>
        
          </div>
          <div id={props.id+"-date"}className='absolute right-8 bottom-2 text-sm lg:text-md text-gray-700'> Yayinlanma Tarihi: {props.date}</div>
          
        </div>
    )
}

export default ListItem

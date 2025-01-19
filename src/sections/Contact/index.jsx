import { useForm } from 'react-hook-form'
import ContactImage from '../../assets/contact.png'
import { toast } from 'sonner'

const data = [
    {
        id: 'none',
        title: 'Xizmat tanlang',
        disabled: 'true'
    },
    {
        id: "O`qish",
        title: 'O`qish'
    },
    {
        id: 'Xitoy mahsuloti',
        title: 'Xitoy mahsuloti'
    },
    {
        id: 'Til kursi',
        title: 'Til kursi'
    }
]

export const Contact = () => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm()

    const submit = (data) => {
        console.log(data);
        reset()
        toast.success('muvofaqilaytli yuborildi')
    }
    return (
        <>
         <div className="w-[100%] flex items-start px-4 xl:px-[32px] py-[60px] xl:py-[70px]"
          style={{
            backgroundImage: `url(${ContactImage})`,
            }}
         >
            <div className='flex w-[100%] flex-col px-4 items-center xl:items-start gap-[20px] xl:gap-[50px]'>
                <div className='flex w-[100%] flex-col items-start gap-[10px]'>
                    <span className='text-[32px] xl:text-[45px] text-center font-[700] text-main'>So`rovingizni qoldiring</span>
                </div>
                <div className='w-[100%] flex flex-col items-start gap-[30px] xl:w-[40%]'>
                    <form onSubmit={handleSubmit(submit)} className='w-[100%] flex flex-wrap gap-[15px]'>
                        <div className='w-[100%]'>
                            <input type="text" {...register('name', {required: 'ism kiriting'})} className='py-[15px] xl:py-[20px] xl:px-[25px] w-[100%] px-[20px] border rounded-[15px] placeholder:text-black/50 placeholder:font-[500]' placeholder='F.I.O' />
                        </div>
                        <div className='w-[100%]'>
                            <input type="email" {...register('email', {required: 'email kiriting'})} className='py-[15px] xl:py-[20px] xl:px-[25px] w-[100%] px-[20px] border rounded-[15px] placeholder:text-black/50 placeholder:font-[500]' placeholder='example@gmail.com' />
                        </div>
                        <div className='w-[100%]'>
                            <input type="number" {...register('phone', {required: 'telefon raqam kiriting'})} className='py-[15px] xl:py-[20px] xl:px-[25px] w-[100%] px-[20px] border rounded-[15px] placeholder:text-black/50 placeholder:font-[500]' placeholder='Telefon raqam' />
                        </div>
                        <div className="w-[100%] border md:w-[100%] xl:py-[20px] xl:px-[25px] py-[10px] px-[10px] h-auto bg-white rounded-[15px]">
                   <select
                           defaultValue={'placeholder'}
                           {...register('xizmat', {
                            validate: value => value !== 'placeholder' || 'Xizmat turini tanlang'
                          })}
                           className="w-[100%] h-[100%] placeholder:text-black/50 outline-none bg-transparent"
                         >
                           <option value="placeholder" disabled>Xizmat turi tanlang</option>
                           <option value="xitoy o`qish">xitoy o`qish</option>
                           <option value="xitoy mahsulot">xitoy mahsulot</option>
                           <option value="til kursi">til kursi</option>
                         </select>
                    </div>
                        <div className='w-[100%]'>
                            <textarea className='py-[15px] xl:py-[20px] xl:px-[25px] w-[100%] px-[20px] border rounded-[15px] placeholder:text-black/50 placeholder:font-[500] h-[160px]'
                              placeholder='Savolinggizni yozib qoldiring'
                              {...register('xabar', {required: true})}
                            >
                            </textarea>
                        </div>
                        <div className='w-[100%] xl:w-[60%]'>
                        <button type='submit' className='py-[15px] w-[100%] rounded-[15px] px-[20px] bg-orangeMain text-white font-[700]'>Yuborish</button>
                    </div>
                    </form>
                    
                </div>
            </div>
         </div>
        </>
    )
}
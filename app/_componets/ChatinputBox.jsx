import { Button } from '@/components/ui/button'
import { Mic, Paperclip, Send } from 'lucide-react'
import React from 'react'
import AimultiModels from './AimultiModels'


function ChatinputBox() {
  return (
    <div className='relative min-h-screen'>
        {/*Page Conetnt */}
        <div>
            <AimultiModels/>
        </div>
        {/*Fixed Chat Input*/}
        <div className='fixed bottom-0 left-25 w-full flex justify-center px-4 pb-4'>
            <div className='w-full border rounded-xl shadow-md max-w-2xl p-4px' >
                <input type='text'
                placeholder ='Ask me anything...'
                className='border-0 outline-none'
                />
                <div className='mt-2 flex justify-between items-center '>
             
                      
              <Button className={''} variant={'ghost'} size={'icon'}>
                <Paperclip  className='h-2 w-2'/>
              </Button>
                    <div className='flex gap-2'>
                        <Button variant={'ghost'} size={'icon'}><Mic/></Button>
                        <Button size={'icon'} className={'bg-blue-800'}><Send/></Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChatinputBox;
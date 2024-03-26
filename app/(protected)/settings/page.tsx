import React from 'react'
import {auth, signOut} from '@/auth';

const SettingPage = async () => {
    const session = await auth();
  return (
    <div>{JSON.stringify(session)}
    
        <form action={async () => {
            'use server'
            await signOut()
        }}>
            <button type="submit">
                Log out
            </button>
        </form>
    </div>
  )
}

export default SettingPage
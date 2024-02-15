'use client'

import { toast } from 'sonner'
//import { swishjam } from '@swishjam/react'
//import { Button } from "@/components/ui/button"
import Logo from '@/components/logo'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { LuCopy, LuArrowUpRight } from 'react-icons/lu'
import { ComboboxPopover } from '@/components/combobox'
import { useForm } from "react-hook-form"
import { useQueryState } from 'nuqs'
import {
  rolePresets,
  tasksPresets,
  outputPresets,
} from '@/components/presets'
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function Home() {
  const [fullStr, setFullStr] = useState('')
  const [role, setRole] = useQueryState('role')
  const [needs, setNeeds] = useQueryState('needs')
  const [tasks, setTasks] = useQueryState('tasks')
  const [process, setProcess] = useQueryState('process')
  const [exclusions, setExclusions] = useQueryState('exclusions')
  const [format, setFormat] = useQueryState('format')
  const [example, setExample] = useQueryState('example')
  
  const form = useForm({defaultValues: {
    role: role,
    needs: needs,
    tasks: tasks,
    process: process,
    exlusions: exclusions,
    format: format,
    example: example,
  }})
 

  form.watch((data, {}) => {
    console.log('logging data from form watch:') 
    console.log(data)
    const promptText = `${data.role ? 'Act like a '+data.role+',' : ''}
      ${data.needs ? 'I need a '+data.needs+',' : ''}
      ${data.tasks ? 'you will '+data.tasks+',' : ''}
      ${data.process ? 'in the process, you should '+data.process+',' : ''}
      ${data.exclusions ? 'please '+data.exlusions+',' : ''}
      ${data.format ? 'output the final result in '+data.format+',' : ''}
      ${data.example ? 'here is an example: '+data.example+',' : ''}`;
  
    setFullStr(promptText)
  })

  return (
    <div className=''>
      <main className={`min-h-screen p-8 overflow-hidden dark mx-auto max-w-7xl grid grid-cols-2 gap-x-8 content-start`}>
        <div className='col-span-2 mb-4'>
          <h1 className="text-base font-semibold leading-7 text-white">Promptcraft</h1>
          <p className="mt-1 text-sm leading-6 text-gray-400">
            An Open-Source Hackable AI Chatbot Prompt Builder <a href="https://github.com" className='flex items-center duration-300 transition-all cursor-pointer hover:text-emerald-500'>view on Github <LuArrowUpRight size={16} className='ml-1'/></a>
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >

          <Form {...form}>
            <form onSubmit={(e) => { e.preventDefault() }} className="mt-4 space-y-4">
               <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-8 gap-x-2">
                    <FormLabel className="text-white col-span-8">Act like a..</FormLabel>
                    <FormControl className="col-span-7">
                      <Input
                        className="text-white"
                        type="text"
                        placeholder="SEO Professional Writer"
                        autoComplete="off"
                        {...form.register("role")}
                      />
                    </FormControl>
                    <ComboboxPopover
                      className="col-span-1"
                      presets={rolePresets}
                      onSelect={(v) => {form.setValue('role', v)}} 
                    />
                    <FormMessage className="col-span-8" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="needs"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-8 gap-x-2">
                    <FormLabel className="text-white col-span-8">I need a..</FormLabel>
                    <FormControl className="col-span-8">
                      <Input
                        className="text-white"
                        type="text"
                        placeholder="Optimzed blog post"
                        autoComplete="off"
                        {...form.register("needs")}
                      />
                    </FormControl>
                    <FormMessage className="col-span-8" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tasks"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-8 gap-x-2">
                    <FormLabel className="text-white col-span-8">You will..</FormLabel>
                    <FormControl className="col-span-7">
                      <Textarea
                        className="text-white"
                        placeholder="Research keywords and incorporate them naturally into the content"
                        autoComplete="off"
                        {...form.register("tasks")}
                      />
                    </FormControl>
                    <ComboboxPopover
                      className="col-span-1"
                      presets={tasksPresets}
                      onSelect={(v) => {form.setValue('tasks', v)}} 
                    />
                    <FormMessage className="col-span-8" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="process"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-8 gap-x-2">
                    <FormLabel className="text-white col-span-8">In the process, you should..</FormLabel>
                    <FormControl className="col-span-8">
                      <Textarea
                        className="text-white"
                        placeholder="Focus on readability, relevance and proper keyword placement"
                        autoComplete="off"
                        {...form.register("process")}
                      />
                    </FormControl>
                    <FormMessage className="col-span-8" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="exclusions"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-8 gap-x-2">
                    <FormLabel className="text-white col-span-8">Please</FormLabel>
                    <FormControl className="col-span-8">
                      <Textarea
                        className="text-white"
                        placeholder="Avoid keyword stuffing"
                        autoComplete="off"
                        {...form.register("exclusions")}
                      />
                    </FormControl>
                    <FormMessage className="col-span-8" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="format"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-8 gap-x-2">
                    <FormLabel className="text-white col-span-8">Ouput the final result as...</FormLabel>
                    <FormControl className="col-span-7">
                      <Input
                        className="text-white"
                        type="text"
                        placeholder="plain text"
                        autoComplete="off"
                        {...form.register("format")}
                      />
                    </FormControl>
                    <ComboboxPopover
                      className="col-span-1"
                      presets={outputPresets}
                      onSelect={(v) => {form.setValue('format', v)}} 
                    />
                    <FormMessage className="col-span-8" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="example"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-8 gap-x-2">
                    <FormLabel className="text-white col-span-8">Here is an example</FormLabel>
                    <FormControl className="col-span-8">
                      <Textarea
                        className="text-white"
                        type="text"
                        placeholder="title: Top 10 Tips for Effective SEO Writing: Boost Your Content's Visibility"
                        autoComplete="off"
                        {...form.register("example")}
                      />
                    </FormControl>
                    <FormMessage className="col-span-8" />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >

          <h2 className="text-base font-semibold leading-7 text-white">Output</h2>
          <div
            className="relative mt-2 bg-white/5 rounded-xl p-8 w-full border-2 border-emerald-500 text-white"
          >
            {fullStr}
            <CopyToClipboard
              text={fullStr}
              onCopy={() => toast.success('Copied to clipboard')}
            >
              <div className='cursor-pointer p-2 rounded-md bg-white/5 hover:bg-white/20 duration-500 transition-all absolute top-2 right-2'>
                <LuCopy className="w-4 h-4 text-white" />
              </div>
            </CopyToClipboard>
          </div>
        </motion.div>
      </main>
      <div className='absolute bottom-8 right-8'>
        <p className='text-white'>Built by <a href="https://twitter.com/zzimbler" className="duration-300 transition-all hover:text-emerald-500 cursor-pointer">@zzimbler</a></p> 
        <a href="https://swishjam.com?utm_campaign=promptcraft&utm_source=promptcraft&ref=promptcraft" className='block border-4 border-white p-4 rounded-md mt-4 bg-white cursor-pointer duration-300 transition-all hover:border-emerald-500 hover:border-4'>
          <p>Sponsored by</p>
          <div className='h-8'>
            <Logo />
          </div>
        </a>
      </div>
    </div>
  )
}

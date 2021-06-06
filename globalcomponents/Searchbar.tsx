import React from 'react'
import {InputGroup, Input, InputLeftElement} from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'

export default function Searchbar() {
  return (
    <div className="w-full flex justify-end h-20 items-center xl:pr-24 lg:pr-14 sm:p-8 md:pr-0">
      <div className="xl:w-1/4 lg:w-1/4 md:w-full sm:w-full">
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<FiSearch size={20} color="grey" />} />
        <Input variant="outline" size="md" />
      </InputGroup>
      </div>
    </div>
  )
}

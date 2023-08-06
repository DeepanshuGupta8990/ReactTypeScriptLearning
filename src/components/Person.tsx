import React from 'react';
import { PersonProps } from './Person.types';

export default function Person(props:PersonProps) {
  return (
    <div>
       Hello {props.name.first}{props.name.last}
    </div>
  )
}

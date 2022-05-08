import React from 'react'

export const Controller = () => {
    return (
        <Controller
        render={({ field }) => (
          <input
            onChange={(e) => field.onChange(transform.output(e))}
            value={transform.input(field.value)}
          />
        )}
      />

    )
}

  

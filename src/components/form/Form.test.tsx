import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from './Form';
import { Input } from '../input';
import { Button } from '../button';

const TestForm = () => {
  const form = useForm({
    defaultValues: {
      username: '',
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(() => {})}>
        <FormField
          control={form.control}
          name="username"
          rules={{ required: 'Username is required' }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

describe('Form', () => {
  it('renders form elements and handles validation error', async () => {
    render(<TestForm />);

    expect(screen.getByText('Username')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Submit'));
    expect(await screen.findByText('Username is required')).toBeInTheDocument();
  });
});

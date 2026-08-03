import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs';

describe('Tabs', () => {
  it('renders tab list and default active content', () => {
    render(
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">Account details here</TabsContent>
        <TabsContent value="password">Change password form</TabsContent>
      </Tabs>,
    );

    const accountTab = screen.getByRole('tab', { name: 'Account' });
    const passwordTab = screen.getByRole('tab', { name: 'Password' });

    expect(accountTab).toHaveAttribute('data-state', 'active');
    expect(passwordTab).toHaveAttribute('data-state', 'inactive');
    expect(screen.getByText('Account details here')).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { App } from './App';

    describe('App', () => {
      it('navigates to another generated page', async () => {
        const user = userEvent.setup();

        render(<App />);
        await user.click(screen.getByRole('button', { name: 'Page 10' }));

        expect(screen.getByRole('heading', { name: 'Page 10' })).toBeInTheDocument();
      });

      it('starts on page 1 instead of page 10', () => {
        render(<App />);

        expect(screen.getByRole('heading', { name: 'Page 1' })).toBeInTheDocument();
        expect(screen.queryByRole('heading', { name: 'Page 10' })).not.toBeInTheDocument();
      });
    });

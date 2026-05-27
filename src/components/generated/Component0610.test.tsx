import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0610 } from './Component0610';
    import { helper090 } from '../../helpers/helper090';

    describe('Component0610', () => {
      it('applies helper090 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0610 label="Generated 0610" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0610' }));

        expect(onApply).toHaveBeenCalledWith(helper090('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0610 label="Generated 0610" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0610' })).toBeDisabled();
      });
    });

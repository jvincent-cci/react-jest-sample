import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0404 } from './Component0404';
    import { helper071 } from '../../helpers/helper071';

    describe('Component0404', () => {
      it('applies helper071 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0404 label="Generated 0404" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0404' }));

        expect(onApply).toHaveBeenCalledWith(helper071('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0404 label="Generated 0404" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0404' })).toBeDisabled();
      });
    });

import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0543 } from './Component0543';
    import { helper097 } from '../../helpers/helper097';

    describe('Component0543', () => {
      it('applies helper097 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0543 label="Generated 0543" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0543' }));

        expect(onApply).toHaveBeenCalledWith(helper097('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0543 label="Generated 0543" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0543' })).toBeDisabled();
      });
    });

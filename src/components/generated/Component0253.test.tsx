import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0253 } from './Component0253';
    import { helper076 } from '../../helpers/helper076';

    describe('Component0253', () => {
      it('applies helper076 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0253 label="Generated 0253" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0253' }));

        expect(onApply).toHaveBeenCalledWith(helper076('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0253 label="Generated 0253" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0253' })).toBeDisabled();
      });
    });

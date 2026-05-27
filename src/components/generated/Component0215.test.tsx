import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0215 } from './Component0215';
    import { helper097 } from '../../helpers/helper097';

    describe('Component0215', () => {
      it('applies helper097 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0215 label="Generated 0215" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0215' }));

        expect(onApply).toHaveBeenCalledWith(helper097('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0215 label="Generated 0215" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0215' })).toBeDisabled();
      });
    });

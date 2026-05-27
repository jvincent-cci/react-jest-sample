import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0495 } from './Component0495';
    import { helper036 } from '../../helpers/helper036';

    describe('Component0495', () => {
      it('applies helper036 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0495 label="Generated 0495" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0495' }));

        expect(onApply).toHaveBeenCalledWith(helper036('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0495 label="Generated 0495" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0495' })).toBeDisabled();
      });
    });

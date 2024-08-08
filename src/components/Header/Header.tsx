import { component$ } from '@builder.io/qwik';

import { MoMenu } from '@qwikest/icons/monoicons';

export interface HeaderProps {

}

export const Header = component$<HeaderProps>((props) => {
  return (
      <>
      <div className="outerbox">
          <div className="innerbox">
              <div>
                  <span>ARAM</span>
                  <span>WONDERGEM</span>
              </div>
              <div>
                  <MoMenu/>
              </div>
          </div>
      </div>
      </>
  );
});

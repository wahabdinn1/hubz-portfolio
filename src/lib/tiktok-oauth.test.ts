import assert from "node:assert/strict";
import test from "node:test";
import { buildLocalForwardUrl, LOCAL_CALLBACK_BASE } from "./tiktok-oauth";

test("buildLocalForwardUrl forwards only non-empty allowlisted TikTok OAuth params to localhost:3000", () => {
  assert.equal(buildLocalForwardUrl(""), null);
  assert.equal(buildLocalForwardUrl("?foo=bar&redirect_uri=https://evil.example"), null);
  assert.equal(buildLocalForwardUrl("?code=&state=%20%20"), null);

  assert.equal(
    buildLocalForwardUrl("?code=abc123&state=xyz&scopes=user.info.basic,video.upload&next=https://evil.example"),
    `${LOCAL_CALLBACK_BASE}?code=abc123&state=xyz&scopes=user.info.basic%2Cvideo.upload`
  );

  assert.equal(
    buildLocalForwardUrl("?error=access_denied&error_description=User+cancelled&extra=1"),
    `${LOCAL_CALLBACK_BASE}?error=access_denied&error_description=User+cancelled`
  );
});
